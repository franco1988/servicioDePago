import Image from 'next/image'
import { Button, Divider } from '../components'

export default function IndexPage() {
  return (
    <div className="flex flex-col m-8 max-w-md">
      <h2 className="mb-6 text-2xl font-bold">Confirm and pay</h2>
      <Button className="bg-[#01B1EA] flex justify-center items-center">
        Pay with{' '}
        <span className="ml-1">
          <Image
            height={40}
            width={98}
            src="/img/mercadopago.png"
            alt="Mercado Pago"
          />
        </span>
      </Button>
      <div className="my-6 relative flex justify-center items-center">
        <span className="text-center bg-white px-4">Or pay with card</span>
        <Divider className="z-[-1] absolute top-[13px]" />
      </div>
    </div>
  )
}