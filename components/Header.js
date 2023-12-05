export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
       See how IntegrityAI can work for you
We're aiming to have institutions in all 50 states partner with IntegrityAI to ensure authenticity in writing. Fill out this form to discover what IntegrityAI can do for you.
Are you a IntegrityAI user looking for support? Check out our FAQ!
      </p>

      <p>
        You can find the code for this project on GitHub at{" "}
        <a href="https://github.com/netlify-templates/nextjs-toolbox">
          https://github.com/netlify-templates/nextjs-toolbox
        </a>
        ! Happy coding!
      </p>
    </>
  );
}
