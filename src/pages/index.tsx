import Link from "next/link";
export default function Home() {
  return (
    <div data-testid="home" className="max-w-3xl py-40 mx-auto">
      <section className={`text-white font-poppins text-2xl`}>
        <p>
          <span className="text-5xl">Welcome to the Blogs app.</span><br/>
          <Link className="hover:text-gray-400 text-blue-400" href="/blog">
            Click here
          </Link>{" "}
          {"to navigate to blogs page"}
        </p>
      </section>
    </div>
  );
}