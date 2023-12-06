import newsImg from "../image/newsImg.svg";

export function NewsComponent() {
  return (
    <article className="newsComponent">
      <img src={newsImg} style={{ width: "100%" }} alt="newsImg"></img>
      <div>2023.09.04</div>
      <div>
        관객이 콘텐츠에 동화될 <br />수 있는 몰입감을 선사합니다
      </div>
    </article>
  );
}
export default NewsComponent;
