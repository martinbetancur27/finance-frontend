import { FeatureProps } from '../../types/FeatureProps'

function Feature( props : FeatureProps ) {

  return (
       <section className="text-center">
          <h2 id={props.idTitle}>{props.title}</h2>
          <img className="image-complementary" src={props.img} alt={props.altImg}></img>
        </section>
  )
}

export default Feature;