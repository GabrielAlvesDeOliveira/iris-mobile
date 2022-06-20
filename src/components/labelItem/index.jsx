import styles from "./styles";
import { View, Text, Image, SectionList } from "react-native";

const LabelItem = ({ label, percentage }) => {
    return (
        <View style={styles.itemWrapper}>
            <Text style={styles.label}>{ label }</Text>
            <Text style={styles.percentage}>{ percentage }</Text>
        </View>
    );
}

export default LabelItem;