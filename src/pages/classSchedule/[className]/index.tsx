import { useRouter } from "next/router";
import BookClass from "../../../Components/BookClass";

const ClassName = () => {
  const router = useRouter();
  const className = router.query.className;

  return (
    <div style={{ margin: "auto", width: "80vw" }}>
      <b>
        <p style={{ fontSize: "30px" }}>Class Name: {className}</p>
      </b>
      <BookClass></BookClass>
    </div>
  );
};

export default ClassName;
