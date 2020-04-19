import {echoTest} from 'react-native-sqlite-storage';
// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

const db = jest.requireActual('./Database')

describe('Database', () => {
    describe('UserLocationsDatabase', () => {

        test('initDB', async () => {
            echoTest.mockReturnValue()
            expect(true).toBeTruthy()
            // const userLocationsDatabase = new db.UserLocationsDatabase
            // await userLocationsDatabase.initDB()
        })
    })
})