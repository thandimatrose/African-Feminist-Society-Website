interface TitleProps {
  onHome: boolean;
}
const Title = ({ onHome }: TitleProps) => {
  return (
    <div id="title-container">
      <h1 id="title" className={onHome ? "on-home" : ""}>
        African <br />
        Feminist
        <br /> Society
      </h1>
    </div>
  );
};

export default Title;
