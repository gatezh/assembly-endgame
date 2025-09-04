import { languages } from "../data/languages";

export default function Languages(props) {
  const languageList = languages.map((language, index) =>
  {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color
    };
    const className = index < props.wrongGuessCount ? "lost" : "";

    return (
      <div
        className={className}
        style={styles}
        key={language.name}
      >
        {language.name}
      </div>
    )
  }
  );

  return (
    <section className="languages">
      {languageList}
    </section> 
  );
}
