import Image from 'next/image'
import Link from 'next/link';

type Props = {
    imageName: string;
    Name: string;
    email: string;
    phone: string;
    role: string;
    internalRole: string;
    website?: string;
    websiteName?: string;
}

export default function Cards({ imageName, Name, email, phone, role, internalRole, website, websiteName }: Props) {
  return (
    <div className="relative">
        <Image 
            src={`/noxys-${imageName}.png`} 
            alt="Card" 
            width={400} 
            height={300}
            className='rounded-xl'
        />
        <div className="absolute bottom-0 left-0 p-4 flex flex-col">
            <h3 className="text-white font-bold text-xl break-words max-w-[150px]">{Name}</h3>
            <p className="text-zinc-500 text-lg font-bold">{role}</p>
            <span className="block h-1 bg-red-700 my-2"></span>
            <p className="text-zinc-300 text-sm mb-2">{internalRole}</p>
            <Link href={`mailto:${email}`} className="text-red-500 hover:text-red-700 hover:underline text-sm mb-2 transition-all">
                <Image src="/icon-email.png" alt="E-mail" width={16} height={16} className="inline-block mr-2" />
                {email}
            </Link>
            <Link href={`https://wa.me/${phone.replace(/\D/g, '')}`} className="text-red-500 hover:text-red-700 hover:underline text-sm mb-2 transition-all" target="_blank" rel="noopener noreferrer">
                <Image src="/icon-phone.png" alt="WhatsApp" width={16} height={16} className="inline-block mr-2" />
                {`${phone}`}
            </Link>
            {website && (
                <Link
                    className="text-red-500 hover:text-red-700 hover:underline text-sm mb-2 transition-all"
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/icon-site.png" alt="Website" width={16} height={16} className="inline-block mr-2" />
                    {websiteName}
                </Link>
            )}
        </div>
    </div>
  )
}