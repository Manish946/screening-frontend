import { useEffect, useState } from "react";
import { getAppointments } from "../Services/Appointments/AppointmentsService";
import { Appointment } from "../Types/Appointments/Appointments";
import { AppointmentItem } from "../components/AppointmentItem";

export function PageAppointments() {
    const [appointmentList, setAppointmentList] = useState<any[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const appointments = await getAppointments();
                setAppointmentList(appointments);
            } catch (error) {
                // Handle error
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div >
        {appointmentList.map((appointment, index) => (
            <AppointmentItem key={index} {...appointment} />
        ))}
    </div>
    )
}