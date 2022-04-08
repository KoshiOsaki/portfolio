import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const WorkCard = (props: any) => {
  const { children, title, img, link, skill, id } = props;
  const [modal, setModal] = useState(false);
  const overlay: any = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const onClickOpen = () => {
    setModal(!modal);
  };

  const router = useRouter();
  const fragment = router.asPath;
  useEffect(() => {
    if (fragment == `/#${id}`) {
      setModal(true);
    }
  }, []);

  return (
    <>
      <div
        className="hover:bg-pink-300 p-2 m-2 rounded-lg bg-slate-300"
        onClick={onClickOpen}
      >
        <p className="block font-bold">{title}</p>
        <img className="w-[300px] h-auto mx-auto mt-3" src={img} alt="" />
      </div>
      {modal ? (
        <div className="" style={overlay} onClick={onClickOpen}>
          <div className="z-10 w-[70%] h-[450px] p-2 mt-[100px] bg-white overflow-auto rounded-lg">
            <div className="relative">
              <p className="text-lg font-bold inline">{title}</p>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white rounded-full inline-block w-[30px] p-auto absolute top-1 right-0"
                onClick={onClickOpen}
              >
                ×
              </button>
            </div>

            {link == "video" ? (
              <video
                className="w-[700px] h-auto mx-auto mt-2"
                src="/syukkou.mp4"
                controls
              ></video>
            ) : link == "none" ? (
              <div>
                <img
                  className="w-[300px] h-auto p-2 m-auto "
                  src={img}
                  alt=""
                />
              </div>
            ) : (
              <div className="text-center pl-6 mt-4">
                <div className="hover:bg-pink-200 w-[320px] mx-auto mt-2 border border-gray-500 inline-block">
                  <a target="_blank" rel="noreferrer" href={link}>
                    <img
                      className="w-[300px] h-auto p-2 m-auto "
                      src={img}
                      alt=""
                    />
                  </a>
                </div>
                <img src="click.png" className="w-[40px] h-auto inline" />
              </div>
            )}

            <div className="p-2 ">
              <div className="p-2 mb-3">
              <dt className="">【使った技術】</dt>
              <dd>{"　"}{skill}</dd>
              </div>
             

              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
