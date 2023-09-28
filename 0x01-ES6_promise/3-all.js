import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    const photo = uploadPhoto();
    const user = createUser();
    return Promise.all([photo, user]).then((result) => {
        console.log(photo.body.firstName, user.body.lastName);
        });
        .catch (error) {
            console.error("Signup system offline");
        });
}
