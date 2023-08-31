import useShowStore from "../store/showStore";

const ButtonHome = () => {
  const { show, setShow } = useShowStore();

  return (
    <>
      <button onClick={setShow}>
        <div className={show ? `show` : ""}>
          <span></span>
        </div>
      </button>
    </>
  );
};

export default ButtonHome;
