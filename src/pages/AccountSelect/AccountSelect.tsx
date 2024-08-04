import { Container } from "reactstrap";
import Profile_Arthur_Picture from '../../../public/AccountCircle.png'
import Guest_Profile_Picture from '../../../public/guest_picture.svg'
import UserSelection from "../../components/AccountSelection/UserSelection";
import {motion} from 'framer-motion'
function SelectAccount() {

    return (
        <>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="vh-100 bg-black text-white">
                <Container
                    className="vh-100 d-flex justify-content-center 
                align-items-center flex-column gap-5">
                    <h3>Quem vai jogar hoje?</h3>
                    <section className="d-flex gap-5">
                        <UserSelection img_src={Profile_Arthur_Picture} isArthur/>
                        <UserSelection img_src={Guest_Profile_Picture}/>
                    </section>
                </Container>
            </motion.div>
        </>
    )
}

export default SelectAccount;