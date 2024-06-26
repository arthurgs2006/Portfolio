import {createBrowserRouter }from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import MyProjectsPage from './pages/myProjects/myProjects'
import Compentences from './pages/competences/Compentences'
import PersonalInfo from './pages/personalInfo/PersonalInfo'
import AcademicFormation from './pages/academicFormation/AcademicFormation'
import ProfessionalExperiences from './pages/professionalExperiences/professional_experiences'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'competences',
        element: <Compentences />,
    },
    {
        path: 'personalInformation',
        element: <PersonalInfo />,
    },
    {
        path: 'academicformation',
        element: <AcademicFormation />,
    },
    {
        path: 'professional_experiences',
        element: <ProfessionalExperiences/>
    },
    {
        path: 'myProjects',
        element: <MyProjectsPage/>,
    }
])

export {routes}