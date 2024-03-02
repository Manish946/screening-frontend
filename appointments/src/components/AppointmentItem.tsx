import { Appointment } from "../Types/Appointments/Appointments";

export function AppointmentItem({
    patient_name, mobile_number, appointment_time, appointment_date, doctor, injury
}: Appointment) {
    return <div>
        <h1>Patient Name: {patient_name}</h1>
        <h1>Mobile Number: {mobile_number}</h1>
        <h1>Appointment Time: {appointment_time}</h1>

    </div>
}