import { IconWrapper, Label, ResourceButtonContainer } from "./styled";

const ResourceButton = ({
  id,
  name,
  label,
  Image,
  navigation
}) => {
  return (
    <ResourceButtonContainer
      id={id}
      onPress={() => navigation.navigate('presentation', { name })}
    >
      <IconWrapper name={name}>
        <Image />
      </IconWrapper>
      <Label name={name}> {label} </Label>
    </ResourceButtonContainer>
  );
}

export default ResourceButton;