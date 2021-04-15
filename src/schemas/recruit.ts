import Joi from "joi";

export const writeRecruitSchema = Joi.object()
  .keys({
    personnel: Joi.number().min(0).max(9).required(),
    name: Joi.string().required(),
    entNo: Joi.string().max(13).required(),
    phone: Joi.string().required(),
    sales: Joi.string(),
    sector: Joi.string(),
    establishmentDate: Joi.string().isoDate().required(),
    workers: Joi.number().required(),
    address: Joi.string().required(),
    managerRank: Joi.string().required(),
    managerPhone: Joi.string().length(13).required(),
    managerEmail: Joi.string().email().required(),
    managerName: Joi.string().required(),
    introduce: Joi.string().max(1000).required(),
    detail: Joi.string().max(255).required(),
    certificates: Joi.array().items(Joi.string()),
    grade: Joi.number().min(0).max(100),
    specialty: Joi.string().max(60),
    startTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    endTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    allowance: Joi.string(),
    salary: Joi.string().required(),
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
    reception: Joi.string().isoDate(),
    deadline: Joi.string().isoDate().required(),
  })
  .unknown();

export const updateRecruitSchema = Joi.object()
  .keys({
    personnel: Joi.number().min(0).max(9).required(),
    name: Joi.string().required(),
    entNo: Joi.string().length(12).required(),
    phone: Joi.string().max(13).required(),
    sales: Joi.string(),
    sector: Joi.string().required(),
    establishmentDate: Joi.string().isoDate().required(),
    workers: Joi.number().required(),
    address: Joi.string().required(),
    managerRank: Joi.string().required(),
    managerPhone: Joi.string().length(13).required(),
    managerEmail: Joi.string().email().required(),
    managerName: Joi.string().required(),
    introduce: Joi.string().max(1000).required(),
    detail: Joi.string().max(255).required(),
    certificates: Joi.array().items(Joi.string()),
    grade: Joi.number().min(0).max(100),
    specialty: Joi.string().max(60),
    startTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    endTime: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    allowance: Joi.string(),
    salary: Joi.string().required(),
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

export const getRecruitsList = Joi.object().keys({
  page: Joi.string().required(),
});

export const removeRecruit = Joi.object().keys({
  id: Joi.string().required(),
});

export const getDetailRecruit = Joi.object().keys({
  id: Joi.string().required(),
});

export const updateRecruit = Joi.object().keys({
  id: Joi.string().required(),
});
