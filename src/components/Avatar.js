import { Accessory } from "./Accessory";

const Avatar = (
  {
    body,
    eyes,
    hair,
    clothing1,
    clothing2,
    clothing3,
    mouth,
    eyebrow,
    glasses,
  },
  ref
) => {
  return (
    <div className="avatar">
      <Accessory path="body" index={body} zIndex={0} />
      <Accessory path="eyes" index={eyes} zIndex={1} />
      <Accessory path="hair" index={hair} zIndex={6} />
      <Accessory path="clothes/layer_1" index={clothing1} zIndex={2} />
      <Accessory path="clothes/layer_2" index={clothing2} zIndex={3} />
      <Accessory path="clothes/layer_3" index={clothing3} zIndex={4} />
      <Accessory path="mouths" index={mouth} zIndex={4} />
      <Accessory path="noses" index={0} zIndex={4} />
      <Accessory path="eyebrows" index={eyebrow} zIndex={4} />
      <Accessory path="accessories/glasses" index={glasses} zIndex={5} />
    </div>
  );
};

export default Avatar;
