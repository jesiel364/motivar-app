import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable, Image, FlatList, ToastAndroid } from 'react-native';


const MotiCard = (props: any) => {

    const phrase = props.data

    const dataSource = [
        {
            label: 'Like'
        },
        {
            label: 'Send'
        },
        {
            label: 'Copy'
        },
    ]

    // function ifPhrase(){
    //     if(phrase.frases){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    return (
        <View style={styles.Card}>
            <Text style={styles.Text}>
                {/* {JSON.stringify(phrase.frases)} */}
                {phrase ? phrase.frases[2].texto : null}


            </Text>

            <Text style={styles.author}>
                {phrase ? phrase.frases[0].autor : null}
            </Text>

            <View style={styles.actions}>
                {dataSource.map((item, index ) => (
                    <Pressable key={index}>
                        <Text style={styles.btnText}>{item.label}</Text>
                    </Pressable>
                ))}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        margin: 32


    },
    Text: {
        fontSize: 22
    },
    author: {
        fontSize: 16,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        
    },
    btnText:{
        padding: 16
    }

})

export default MotiCard