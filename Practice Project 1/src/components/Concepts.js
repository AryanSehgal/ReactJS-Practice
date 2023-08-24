import Concept from "./Concept";

export default function Concepts({ concepts }) {
  const ConceptArray = concepts.map((concept) => (
    <Concept
      img={concept.image}
      title={concept.title}
      description={concept.description}
    ></Concept>
  ));

  return <ul id="concepts">{ConceptArray}</ul>;
}
