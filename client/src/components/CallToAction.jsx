import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Register to Uni Awards 2024 </h2>
        <p className="text-gray-500 my-2">
          For all universities in Tanzania, mainland and islands alike. Let us
          know if you're ready to carry your university on your shoulders and
          bring back awards to campus.
          <br />
          🏆🏆🏆
        </p>
        <Button
          gradientDuoTone="redToYellow"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER NOW
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/uni-media-blog-app.appspot.com/o/Snapinsta.app_427683449_773970587919476_4445161152811554221_n_1080%20(1).jpg?alt=media&token=c89d0b83-39c1-4e02-b739-08e87674aa9d" />
      </div>
    </div>
  );
}
