import Joi from "joi";

export const writeRecruitSchema = Joi.object()
  .keys({
    personnel: Joi.number().min(0).max(9).required(),
    name: Joi.string().required(),
    entNo: Joi.string().length(12).required(),
    phone: Joi.string().length(12).required(),
    sales: Joi.number(),
    sector: Joi.string().required(),
    establishmentDate: Joi.string().isoDate().required(),
    workers: Joi.number().required(),
    address: Joi.string().required(),
    zipCode: Joi.string().length(5).required(),
    managerRank: Joi.string().required(),
    managerPhone: Joi.string().length(13).required(),
    managerEmail: Joi.string().email().required(),
    introduce: Joi.string().max(255).required(),
    detail: Joi.string().max(255).required(),
    certificates: Joi.array().items(Joi.string()),
    grade: Joi.number().min(1).max(100).required(),
    specialties: Joi.array().items(Joi.string()),
    startTime: Joi.string()
      .regex(/^([0-9]{2})\:([0-9]{2})$/)
      .required(),
    endTime: Joi.string()
      .regex(/^([0-9]{2})\:([0-9]{2})$/)
      .required(),
    salary: Joi.number().required(),
    period: Joi.number().required(),
    breakfast: Joi.boolean(),
    lunch: Joi.boolean(),
    dinner: Joi.boolean(),
    mealSalary: Joi.boolean(),
    fourMajor: Joi.boolean(),
    selfDevelop: Joi.boolean(),
    labtop: Joi.boolean(),
    etc: Joi.string(),
    recruitPlan: Joi.boolean().required(),
    reception: Joi.string().isoDate().required(),
    deadline: Joi.string().isoDate().required(),
  })
  .unknown();

export const addIntroductions = Joi.object().keys({
  no: Joi.string().length(12).required(),
});
