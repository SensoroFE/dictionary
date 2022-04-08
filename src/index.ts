import type { Dictionary } from './types';

/** 称呼(性别) 字典 */
export const CallTypes: Dictionary[] = [
  { value: 1, label: '先生' },
  { value: 2, label: '女士' },
];

/** 称呼(性别)字典 字符串类型 后端标准 新接口必须使用这个 */
export const CallTypeStrs: Dictionary[] = [
  { value: 'male', label: '先生' },
  { value: 'female', label: '女士' },
];

/** 性别字典 后端标准 新接口必须使用这个 */
export const GenderTypes: Dictionary[] = [
  { value: 'male', label: '男' },
  { value: 'female', label: '女' },
];

/** 婚姻状态 */
export const MaritalStatus: Dictionary[] = [
  { value: 'A', label: '已婚' },
  { value: 'B', label: '未婚' },
  { value: 'C', label: '离异' },
  { value: 'D', label: '丧偶' },
];

/** 证件类型 */
export const CertificateTypes: Dictionary[] = [
  { value: 'A', label: '身份证' },
  { value: 'B', label: '军人证' },
  { value: 'C', label: '护照' },
  { value: 'D', label: '港澳通行证' },
  // { value: "E", label: "驾驶证" },
  { value: 'F', label: '台胞证' },
  { value: '0', label: '其他' },
];

/** 租户类型字典 */
export const TenantTypes: Dictionary[] = [
  { label: '企业', value: 1 },
  { label: '机关', value: 3 },
  { label: '事业单位 ', value: 5 },
  { label: '社会团体', value: 7 },
  { label: '其他组织机构', value: 9 },
];

/** 项目类型字典 */
export const ProjectTypes: Dictionary[] = [
  { label: '政府机关', value: 1 },
  { label: '事业单位', value: 2 },
  { label: '教育行业', value: 3 },
  { label: '乡镇农村', value: 4 },
  { label: '住宅小区', value: 5 },
  { label: '娱乐服务', value: 6 },
  { label: '交通枢纽', value: 7 },
  { label: '公共建筑', value: 8 },
];

export { Educations } from './education';
export { Nations } from './nation';
export { PoliticTypes } from './politic';
export { CareerTypes } from './career';
