import Joi from "joi";

const firstRecruitSchema = Joi.object()
  .keys({
    personnel: Joi.number().min(0).max(9).required(),
    name: Joi.string().required(),
    entNo: Joi.string().length(13).required(),
    phone: Joi.string().length(13).required(),
    sales: Joi.number(),
    sector: Joi.string().required(),
    establishmentDate: Joi.string().isoDate().required(),
    address: Joi.string().required(),
    zipCode: Joi.string().length(6).required(),
    managerRank: Joi.string().required(),
    managerPhone: Joi.string().length(14).required(),
    managerEmail: Joi.string().email().required(),
  })
  .unknown();

const secondRecruitSchema = Joi.object()
  .keys({
    introduce: Joi.string().length(255).required(),
    detail: Joi.string().length(255).required(),
  })
  .unknown();

const thirdRecruitSchema = Joi.object()
  .keys({
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
  })
  .unknown();

const fourthRecruitSchema = Joi.object()
  .keys({
    recruitPlan: Joi.boolean().required(),
    reception: Joi.string().isoDate().required(),
    deadline: Joi.string().isoDate().required(),
    introductions: Joi.array(),
  })
  .unknown();

export {
  firstRecruitSchema,
  secondRecruitSchema,
  thirdRecruitSchema,
  fourthRecruitSchema,
};
