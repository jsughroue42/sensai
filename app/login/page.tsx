import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex bg-gradient-to-br from-black to-slate-800 min-h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 mt-10 w-full items-end rounded-lg bg-lime-700 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
          <p className="text-5xl">Sens<span className=" text-5xl">AI</span></p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}