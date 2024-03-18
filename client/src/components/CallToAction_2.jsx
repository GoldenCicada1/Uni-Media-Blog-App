import { Button } from "flowbite-react";

export default function CallToAction_2() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Register to Uni Marathon 2024</h2>
        <p className="text-gray-500 my-2">
          For all universities in Tanzania, mainland and islands alike. Let us
          know if you're ready to carry your university on your shoulders and
          bring back awards to campus.
        </p>
        <Button
          gradientDuoTone="greenToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER NOW
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/uni-media-blog-app.appspot.com/o/pietro-rampazzo-x5GcXFvJJhI-unsplash.jpg?alt=media&token=6281a4dc-cd24-46b5-bd37-e41dd9f41bba" />
      </div>
    </div>
  );
}
