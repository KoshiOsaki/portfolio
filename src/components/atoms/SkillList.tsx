export const SkillList = (props: any) => {
  const { lang, star } = props;
  const stars: any = [];
  const skillStar = (num: any): any => {
    for (var i = 0; i < 5; i++) {
      stars.push(
        i < num ? (
          <img key={i} src="/star-on.png" className="inline" />
        ) : (
          <img key={i} src="/star-off.png" className="inline" />
        )
      );
    }
    return stars;
  };
  return (
    <>
      <dt className="w-[35%]">{lang}</dt>
      <dd className="w-[50%]">{skillStar(star)}</dd>
    </>
  );
};
