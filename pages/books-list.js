import { Button, createStyles, Text, Textarea } from "@mantine/core";
import Image from "next/image";
import logo from "../public/book.png";
import like from "../public/like.png";
import favorite from "../public/bookmarkFilled.png";
import notFavorite from "../public/bookmark.png";

const useStyles = createStyles(() => ({
    container: {
        maxWidth: "500px",
      padding: "50px 50px",
    },
    bookview: {
        display: "flex",
        // width: "100%",
        display: "table",
    width: "100%",
    tableLayout: "fixed",
    },
}))

function viewBook() {
    const { classes } = useStyles();

  return (<div className={classes.container}>
    <div className={classes.bookview}>
      <Image src={logo} width={25} height={25} alt="Book photo" />
      <Text>Book title</Text>
      <Text>Book description</Text>
      <Button radius="lg" compact>
        <Image src={like} width={25} height={25} />
      </Button>
      </div>
      <div >
      <Textarea
      placeholder="Your comment"
      label="Your comment"
    />
      <Button radius="md">Send</Button>
    </div>
    <Button radius="md" >
        <Image src={favorite} width={25} height={25} />
        <Text>Mark as favorite</Text>
      </Button>
    </div>
  );
}

export default viewBook;
