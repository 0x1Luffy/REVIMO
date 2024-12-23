const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-white sm:justify-start">
            <svg
              className="h-8"
              viewBox="0 0 200 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="10"
                y="35"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "32px",
                  fontWeight: "bold",
                  fill: "#fff",
                }}
              >
                REVIMO 🙂‍↔️
              </text>
            </svg>
          </div>

          <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
