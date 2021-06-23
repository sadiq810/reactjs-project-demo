import {sortBy} from 'lodash';
import programs from "../../assets/data/programs";

export const filterPrograms = (programs, title = '', location = '', sort = 'asc', applyFilter, filters) => {
    let p = [...programs];

    if (location)
        p = p.filter(pr => pr.university.title.toLowerCase().includes(location.toLowerCase() || pr.university.location.toLowerCase().includes(location.toLowerCase())));

    if (title)
        p = p.filter(pr => pr.title.toLowerCase().includes(title.toLowerCase()));

    p = sortBy(p, ['title'])

    if (sort == 'desc')
        p = p.reverse();

    if (applyFilter) {
        p = p.filter(pr => {
            return  pr.tuition_fee >= (filters.tuition_fee.from * 1000) && pr.tuition_fee <= (filters.tuition_fee.to * 1000)
                    && pr.application_fee >= (filters.application_fee.from * 1000) && pr.application_fee <= (filters.application_fee.to * 1000);
        });
    }

    return p;
}


export const getProgramById = (id, programs) => {
    return programs.find(p => p.id == id);
};

export const getUserPaidPrograms = (programs) => {
    return programs.filter(p => p.status == 'approved')
};

export const getUserUnPaidPrograms = (programs) => {
    return programs.filter(p => p.status == 'unpaid')
};
