import styled from "./style.module.css";

export const MapGoogle = () => {
  return (
    <div className={styled.containerMap}>
      <iframe
        className={styled.maps}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7042.194358630511!2d-96.12605564501303!3d15.762577629985785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85bf21147567d17f%3A0x15894220fe4483f5!2sHOTEL%20BAHIA%20HUATULCO!5e0!3m2!1ses!2sar!4v1702598992324!5m2!1ses!2sar"
        loading="lazy"
      ></iframe>
    </div>
  );
};
