import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');
  const categories = ['gym', 'couple', 'funny', 'memories'];
  
  const photos: { src: string; category: string; alt: string }[] = [];
  
  for (const category of categories) {
    const categoryDir = path.join(photosDir, category);
    
    try {
      if (fs.existsSync(categoryDir)) {
        const files = fs.readdirSync(categoryDir);
        const imageFiles = files.filter(file => 
          /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        
        for (const file of imageFiles) {
          photos.push({
            src: `/photos/${category}/${file}`,
            category: category.charAt(0).toUpperCase() + category.slice(1),
            alt: `${category} photo - ${file}`,
          });
        }
      }
    } catch (error) {
      console.error(`Error reading ${category} directory:`, error);
    }
  }
  
  return NextResponse.json(photos);
}
