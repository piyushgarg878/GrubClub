import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=' w-full flex justify-center'>
        <SignIn />
    </div>
  )
}