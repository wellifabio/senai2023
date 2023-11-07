import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    Platform
} from "react-native"

//mesmo que array = [1,2,3] até 10...
const array = Array.from({length: 10}, (_, i) => i + 1);

//funcao que gera valor aleatorio de 0 a 100
const gerarPrecoAleatorio = () => {
    return Math.floor(Math.random()*100)
}

export default function Destaques() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <FlatList
                    data={array}
                    keyExtractor={item => item.toString()}
                    style={styles.flatList}
                    renderItem={({ item }) => {
                        const preco = gerarPrecoAleatorio()
                        return (
                            <TouchableOpacity style={styles.produto}>
                                <Image 
                                    source={"https://img.freepik.com/fotos-gratis/tiro-do-estudio-da-mulher-negra-bonita-com-o-saco-de-compras-branco-que-esta-sobre-o-fundo-amarelo-olhar-na-moda-primavera-na-moda_273443-10.jpg?w=1380&t=st=1683811775~exp=1683812375~hmac=8a6f32e233ee6a83022ad0e217b62446274ef2fafddba2c47f61f4690954a050"}
                                    style={styles.imageProduto}
                                />
                                <Text style={styles.textProduto}>Produto</Text>
                                <Text style={styles.textProduto}>R${preco}.00</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

// if(Platform.OS === 'android') {
//     statusBarHeight
// }
// else {
//     25
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
      },
    title: {
        color: '#121214',
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatList: {
        marginTop: 10,
        flex: 1,
        width: '100%',
        paddingBottom: 100,
    },
    produto: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        flex: 1,
        width: '97%',
        gap: 10,
        minHeight: 100,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textProduto: {
        color: '#000',
        fontSize: 20,
    },
    imageProduto: {
        width:80,
        height:80,
    }

})