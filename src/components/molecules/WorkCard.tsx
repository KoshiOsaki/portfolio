import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const WorkCard = (props: any) => {
  const { children, title, img, href, video, skill, id } = props;
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
        <p className="block">{title}</p>
        <img className="w-[300px] h-auto mx-auto mt-3" src={img} alt="" />
      </div>
      {modal ? (
        <div className="" style={overlay}>
          <div className="z-10 w-1/2 h-[450px] p-2 mt-[100px] bg-white overflow-auto rounded-lg">
            <div className="relative">
              <p className="text-lg inline">{title}</p>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white rounded-full inline-block w-[30px] p-auto absolute top-1 right-0"
                onClick={onClickOpen}
              >
                ×
              </button>
            </div>

            {video ? (
              <video
                className="w-[400px] h-auto mx-auto mt-2"
                src="/syukkou.mp4"
                controls
              ></video>
            ) : (
              <div className="hover:bg-pink-200 w-[320px] mx-auto mt-2 border border-gray-500">
                <a target="_blank" rel="noreferrer" href={href}>
                  <img
                    className="w-[300px] h-auto p-2 m-auto "
                    src={img}
                    alt=""
                  />
                </a>
              </div>
            )}

            <div className="p-2">
              <dt>使った技術</dt>
              <dd>{skill}</dd>

              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
