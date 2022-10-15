import CelebrityRecognitionPress from "../components/Images/presentation/CelebrityRecognitionPress";
import FaceDetectionPress from "../components/Images/presentation/FaceDetectionPress";
import ObjectRecognitionPress from "../components/Images/presentation/ObjectRecognitionPress";
import TextDetectionPress from "../components/Images/presentation/TextDetectionPress";

const presentationsContent = {
  object: {
    screenName: 'LabelsResults',
    Icon: <ObjectRecognitionPress />,
    title: 'Reconhecimento de Objetos e Ações',
    description: 'Identifique objetos com a nossa tecnologia de reconhecimento de objetos e ações. Selecione uma imagem ou tire uma foto, e retornaremos rótulos relacionados a sua imagem. '
  },
  face: {
    screenName: 'FaceResults',
    Icon: <FaceDetectionPress />,
    title: 'Detecção e Análise de Rostos',
    description: 'Está curioso para descobrir quem é certa pessoa? Identifique ela a partir da nossa tencologia de detecção e análise de rosto.'
  },
  text: {
    screenName: 'TextResults',
    Icon: <TextDetectionPress />,
    title: 'Detecção e Transcrição de Texto',
    description: 'Identifique o seu texto a partir da nossa tecnologia de detecção e transcrição de texto em imagens. Abra sua câmera ou selecione uma imagem e foque em seu texto de preferência.'
  },
  celebrity: {
    screenName: 'CelebrityResults',
    Icon: <CelebrityRecognitionPress />,
    title: 'Identificação de celebridades',
    description: 'Curioso para saber o nome de tal celebridade? Envie uma imagem da celebridade e confira as possibilidades de nomes que correspondam a essa pessoa.'
  },
}

export default presentationsContent;