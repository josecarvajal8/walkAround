import * as firebase from 'firebase';

/** 
 * @author: Jose Carvajal
 * @description: establece la conexión con el proyecto de Firebase
*/


class Connect {
    static init() {
        firebase.initializeApp({
            apiKey: "AIzaSyDY0yIIbjt_Bwief8uruIVrAtsslni3QmM",
            authDomain: "walkaround-78a6e.firebaseapp.com",
            databaseURL: "https://walkaround-78a6e.firebaseio.com",
            projectId: "walkaround-78a6e",
            storageBucket: "walkaround-78a6e.appspot.com",
        })
    }
}

module.exports = Connect;