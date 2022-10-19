import Link from "next/link";
import Image from "next/image";
import book from "../public/book.png";

function LoginForm() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-gray-900 mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="border-gray-300 text-gray-900 placeholder-gray-500 relative block w-full appearance-none rounded-none rounded-t-md border px-3 py-2 focus:z-10 focus:border-red focus:outline-none focus:ring-red sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="border-gray-300 text-gray-900 placeholder-gray-500 relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 focus:z-10 focus:border-red focus:outline-none focus:ring-red sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border-transparent text-white group relative flex w-full justify-center rounded-md border bg-darkblue py-2 px-4 text-sm font-medium hover:bg-red focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/register"
                className="font-medium text-darkblue hover:text-red"
              >
                <a className="font-medium text-darkblue hover:text-red">
                  Don&apos;t have an account? Register here
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
