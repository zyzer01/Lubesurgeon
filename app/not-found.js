import Image from 'next/image';
import Link from 'next/link';
import notFoundImage from '/public/images/404 Error lubesurgeons.svg';

export default function NotFound() {
  return ( 
    <div className="grid justify-center">  
      <div>
        <Image src={notFoundImage} alt="Not found error page" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">Page Not Found</h2>
        <p>Could not find requested resource</p>
        <p className='mt-4 text-primary'>
        <Link href="/">
          Return Home
        </Link>
        </p>
      </div>
    </div>
  );
}
