import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
    > <Image 
        src="/sensai.png" 
        alt="SensAI Logo" 
        width={200}   // Replace with the actual width of the image
      height={300}  // Replace with the actual height of the image
      layout="responsive" // Optional: Makes the image responsive
    />
    </div>
  );
}
