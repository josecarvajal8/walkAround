import * as firebase from 'firebase';

const activitiesPath = '/activities/'
const participantsPath = '/participants/'


class Provider{


    static activitiesData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref(activitiesPath).once('value', snapshot => {
                let arrayActivities = [];
                if (snapshot.val()) {
                    arrayActivities = this.buildArray(snapshot);
                }
                resolve(arrayActivities);
            }, err => {
                reject(err);
            });
        });
    }

static createActivity( name, description, date, hour, ubication, creator) {
    return new Promise((resolve, reject) => {
        let activityData={}
            activityData={ 
                name: name,
                description: description,
                date: date,
                hour: hour,
                ubication: ubication,
                creator:creator          
        }
       // firebase.database().ref(activitiesPath + activityId).push(activityData).then(() => { 
        firebase.database().ref(activitiesPath).push(activityData).then(() => {
            resolve();
        }, err => {
            reject(err);
        });
    });
}

static joinActivity( activityId, name, telefono, email) {
    return new Promise((resolve, reject) => {
        let participants={}
            participants={ 
                name: name,
                telefono: telefono,
                email:email        
        }
       // firebase.database().ref(activitiesPath + activityId).push(activityData).then(() => { 
        firebase.database().ref(participantsPath + activityId).push(participants).then(() => {
            resolve();
        }, err => {
            reject(err);
        });
    });
}


static buildArray(firebaseData) {
    let arrayData = [];
    firebaseData.forEach(element => {
        let item = element.val();
        item.id = element.key;
        arrayData.push(item);
    });
    return arrayData;
}
    
}