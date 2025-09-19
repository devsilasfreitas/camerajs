import Ionicons from "@expo/vector-icons/Ionicons";

export function TabBarIcon({ style, ...rest }) {
    return <Ionicons size={18} style={[{ marginBottom: -3}, style ]} {...rest} />;
}