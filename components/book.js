import Image from "next/image";
import like from "../public/heart-outline.svg";

function Book() {
  return (
    <div>
      <div>
        <p>Book ID</p> {/*ID of the book*/}
        <p>Book Author(s)</p> {/*Author(s) of the book*/}
        <p>Book Title</p> {/*Title of the book*/}
        <p>Book Publisher</p> {/*Publisher of the book*/}
        <p>Book Year</p> {/*Year of the book*/}
        <Image src={like} width={25} height={25} alt="Like" />
      </div>
    </div>
  );
}

export default Book;
