import { languages } from "../data/languages";

export default function Languages() {
  const languageList = languages.map(language =>
  {
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color
    };
    return (
      <div
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