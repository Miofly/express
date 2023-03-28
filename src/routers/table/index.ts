import { type Request, type Response, Router } from 'express';
import { resultSuccess } from '../../utils';

export const tableRouter = Router({});

tableRouter.get('/', async(req: Request, res: Response) => {
 const data = {
   'total': 1868,
   'values': [
     {
       'id': 'cAQBjM0tR8M59+q4b0358g==',
       'companyId': 'P9l15TI1Yrjq8GTDmO5jZg==',
       'companyName': '荆门市交通旅游投资集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '湖北',
       'city': '荆门',
       'country': null,
       'industryCategory': '道路运输辅助活动',
       'businessTermStartDate': '2013-11-15',
       'registeredCapital': '80000.00',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '2023年荆门市交通旅游投资集团有限公司绿色债券',
       'bondShortName': '23荆交旅绿色债',
       'bondTypeName': '普通企业债',
       'bondPeriod': '7.00Y',
       'issuingScale': 10,
       'couponRateDisplay': null,
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-29',
       'maturityDate': '2030-03-29',
       'facilityRatingDate': '2023-02-13',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中诚信国际信用评级有限责任公司',
       'securitiesCode': null,
       'issuingDate': '2023-03-28',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '荆门国际内陆港公铁物流中心项目',
           'amountForProjectDisplay': '8.00',
           'rate': '80.00%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '2.00',
           'rate': '20.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': '4WMZMd5qvQgY25cho1Rkww==',
       'companyId': 'n8J638ohoebKh7jc5IOyhQ==',
       'companyName': '山东正方控股集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '山东',
       'city': '济宁',
       'country': '邹城市',
       'industryCategory': '土木工程建筑业',
       'businessTermStartDate': '2010-02-10',
       'registeredCapital': '72000.00',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '2023年山东正方控股集团有限公司绿色债券',
       'bondShortName': '23正方绿色债',
       'bondTypeName': '普通企业债',
       'bondPeriod': '7.00Y',
       'issuingScale': 7,
       'couponRateDisplay': null,
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-30',
       'maturityDate': '2030-03-30',
       'facilityRatingDate': '2023-03-14',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中诚信国际信用评级有限责任公司',
       'securitiesCode': null,
       'issuingDate': '2023-03-28',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '清洁生产产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '邹城经济开发区工业供汽工程',
           'amountForProjectDisplay': '3.50',
           'rate': '50.00%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '3.50',
           'rate': '50.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'mrUaNsBCklBy6ArW7qQV/g==',
       'companyId': 'KmI/YolYWkod9DHMatnUuw==',
       'companyName': '山东宏桥新型材料有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '山东',
       'city': '滨州',
       'country': null,
       'industryCategory': '有色金属压延加工',
       'businessTermStartDate': '1994-07-27',
       'registeredCapital': '1175933.30',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '山东宏桥新型材料有限公司2023年度第一期绿色中期票据',
       'bondShortName': '23鲁宏桥GN001',
       'bondTypeName': '中期票据',
       'bondPeriod': '2.00Y',
       'issuingScale': 3,
       'couponRateDisplay': null,
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-29',
       'maturityDate': '2025-03-29',
       'facilityRatingDate': '2023-03-17',
       'facilityRating': 'AA+',
       'facilityRatingAgency': '联合资信评估股份有限公司',
       'securitiesCode': 'N0409276',
       'issuingDate': '2023-03-28',
       'debtorRating': 'AA+',
       'companyClassifications': [
         '民营企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '节能环保产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '中欧循环科技产业园项目',
           'amountForProjectDisplay': '3.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': 'G1',
       'certificationDate': '2023-03-14',
       'certificationResultsDescription': '募集资金全部用于绿色产业项目，绿色等级为G1',
       'expired': false
     },
     {
       'id': 'a8UFW/u5XMbOlAFlBk0uUQ==',
       'companyId': 'hOJkmKr/uOm5UNe7U6d6HA==',
       'companyName': '珠海格力电器股份有限公司',
       'parentCompanyId': null,
       'tags': [
         '上市'
       ],
       'hbTags': [
         '重点排污单位'
       ],
       'province': '广东',
       'city': '珠海',
       'country': '香洲区',
       'industryCategory': '家用电力器具制造',
       'businessTermStartDate': '1989-12-13',
       'registeredCapital': '563140.57',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '珠海格力电器股份有限公司2023年度第一期绿色超短期融资券',
       'bondShortName': '23格力电器GN001',
       'bondTypeName': '短期融资券',
       'bondPeriod': '0.58Y',
       'issuingScale': 9,
       'couponRateDisplay': null,
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-29',
       'maturityDate': '2023-10-25',
       'facilityRatingDate': null,
       'facilityRating': null,
       'facilityRatingAgency': null,
       'securitiesCode': 'N0409284',
       'issuingDate': '2023-03-27',
       'debtorRating': 'AAA',
       'companyClassifications': [
         '主板'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '节能环保产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '格力电器（赣州）智能制造基地',
           'amountForProjectDisplay': '9.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': 'G-1',
       'certificationDate': '2023-03-20',
       'certificationResultsDescription': '中诚信授予珠海格力电器股份有限公司2023年度第一期绿色超短期融资券G-1级',
       'expired': false
     },
     {
       'id': 'fm0sRm8FEA/F8fLs6zFYyg==',
       'companyId': '4TdMAS3O6By9/3JpPYFzXg==',
       'companyName': '无锡华光环保能源集团股份有限公司',
       'parentCompanyId': null,
       'tags': [
         '上市'
       ],
       'hbTags': [
         '重点排污单位'
       ],
       'province': '江苏',
       'city': '无锡',
       'country': '新吴区',
       'industryCategory': '环境治理业',
       'businessTermStartDate': '2000-12-26',
       'registeredCapital': '94389.41',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '无锡华光环保能源集团股份有限公司2023年度第一期绿色中期票据(碳资产)',
       'bondShortName': '23华光环保MTN001(绿色碳资产)',
       'bondTypeName': '中期票据',
       'bondPeriod': '2.00Y',
       'issuingScale': 4,
       'couponRateDisplay': null,
       'calculateInterestMethod': '浮息',
       'valueDate': '2023-03-27',
       'maturityDate': '2025-03-27',
       'facilityRatingDate': null,
       'facilityRating': null,
       'facilityRatingAgency': null,
       'securitiesCode': '102380690',
       'issuingDate': '2023-03-23',
       'debtorRating': 'AA+',
       'companyClassifications': [
         '主板'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#35CACA'
         },
         {
           'id': null,
           'name': '碳中和债券',
           'description': null,
           'color': '#fff',
           'bgColor': '#2FAF83'
         }
       ],
       'greenProjectClassifications': [
         '清洁能源产业',
         '节能环保产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '惠联垃圾热电提标扩容项目',
           'amountForProjectDisplay': '4.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': 'G-1',
       'certificationDate': '2023-02-28',
       'certificationResultsDescription': '中诚信授予无锡华光环保能源集团股份有限公司 2023 年度第一期绿色中期票据（碳资产）G-1 等级',
       'expired': false
     },
     {
       'id': 'WMzbVqzjEIaZ71OeNslRZQ==',
       'companyId': '1OD8SjpYkAdJMhVGIM3JsQ==',
       'companyName': '广东省风力发电有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '广东',
       'city': '广州',
       'country': null,
       'industryCategory': '电力生产',
       'businessTermStartDate': '1997-05-23',
       'registeredCapital': '280125.29',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '广东省风力发电有限公司2023年面向专业投资者公开发行绿色公司债券(第一期)(品种二)',
       'bondShortName': 'G23粤风2',
       'bondTypeName': '公司债',
       'bondPeriod': '5.00Y',
       'issuingScale': 6,
       'couponRateDisplay': '3.15',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-21',
       'maturityDate': '2028-03-21',
       'facilityRatingDate': '2023-02-28',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中诚信国际信用评级有限责任公司',
       'securitiesCode': '115042',
       'issuingDate': '2023-03-20',
       'debtorRating': 'AA+',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '非贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#4CCA72'
         }
       ],
       'greenProjectClassifications': [
         '清洁能源产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '某风电场99.8MW工程项目',
           'amountForProjectDisplay': '0.98',
           'rate': '16.33%'
         },
         {
           'projectName': '某50MW风电项目',
           'amountForProjectDisplay': '0.64',
           'rate': '10.60%'
         },
         {
           'projectName': '某90MW渔光互补光伏电站项目',
           'amountForProjectDisplay': '0.52',
           'rate': '8.74%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '3.86',
           'rate': '64.32%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'JYO60edBzvuyRSpZkI5o8g==',
       'companyId': 'Xg34xF+9sIszkjZw1MEN4A==',
       'companyName': '上海城投水务(集团)有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '上海',
       'city': null,
       'country': '杨浦区',
       'industryCategory': '自来水生产和供应',
       'businessTermStartDate': '2014-05-13',
       'registeredCapital': '3326178.42',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '上海城投水务(集团)有限公司2023年度第一期绿色中期票据',
       'bondShortName': '23城投水务GN001',
       'bondTypeName': '中期票据',
       'bondPeriod': '3.00Y',
       'issuingScale': 3,
       'couponRateDisplay': '2.95',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-17',
       'maturityDate': '2026-03-17',
       'facilityRatingDate': '2023-02-16',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中诚信国际信用评级有限责任公司',
       'securitiesCode': '132380016',
       'issuingDate': '2023-03-15',
       'debtorRating': 'AAA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '智能远传水表安装、供水管网更新改造、供水管网日常维护运营项目',
           'amountForProjectDisplay': '3.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': 'G-1',
       'certificationDate': '2023-02-14',
       'certificationResultsDescription': '中诚信授予上海城投水务（集团）有限公司2023年第一期绿色中期票据 G-1 等级',
       'expired': false
     },
     {
       'id': 'aXT0B/lX1uB0RsqC5N4ZPA==',
       'companyId': 'nK5jtRSk5g3ncE+PPzTshw==',
       'companyName': '嘉兴市南湖城市建设投资集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '浙江',
       'city': '嘉兴',
       'country': '南湖区',
       'industryCategory': '土木工程建筑业',
       'businessTermStartDate': '2013-04-08',
       'registeredCapital': '124840.00',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '2023年第一期嘉兴市南湖城市建设投资集团有限公司绿色债券',
       'bondShortName': '23南湖绿色债01',
       'bondTypeName': '普通企业债',
       'bondPeriod': '7.00Y',
       'issuingScale': 4,
       'couponRateDisplay': '4.40',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-14',
       'maturityDate': '2030-03-14',
       'facilityRatingDate': '2022-06-30',
       'facilityRating': 'AA+',
       'facilityRatingAgency': '上海新世纪资信评估投资服务有限公司',
       'securitiesCode': '2380042',
       'issuingDate': '2023-03-13',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '清洁生产产业',
         '节能环保产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '南湖工业污水处理厂新建项目',
           'amountForProjectDisplay': '3.20',
           'rate': '80.00%'
         },
         {
           'projectName': '嘉兴市南湖建筑垃圾处置中心项目',
           'amountForProjectDisplay': '0.70',
           'rate': '17.50%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '0.10',
           'rate': '2.50%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'sk+uc1ffbxHD5H8ieAYe1w==',
       'companyId': 'oJi4voJ9sNpJJh6TIh0irA==',
       'companyName': '荆州市荆州开发集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '湖北',
       'city': '荆州',
       'country': null,
       'industryCategory': '房地产开发经营',
       'businessTermStartDate': '2019-03-26',
       'registeredCapital': '1178144.77',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '荆州市荆州开发集团有限公司2023年面向专业投资者非公开发行碳中和绿色公司债券(第一期)(品种二)',
       'bondShortName': '23荆开G2',
       'bondTypeName': '公司债',
       'bondPeriod': '5.00Y',
       'issuingScale': 10,
       'couponRateDisplay': '6.00',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-10',
       'maturityDate': '2028-03-10',
       'facilityRatingDate': null,
       'facilityRating': null,
       'facilityRatingAgency': null,
       'securitiesCode': '133445',
       'issuingDate': '2023-03-10',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '非贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#4CCA72'
         },
         {
           'id': null,
           'name': '碳中和债券',
           'description': null,
           'color': '#fff',
           'bgColor': '#2FAF83'
         }
       ],
       'greenProjectClassifications': [
         '清洁能源产业',
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '荆州经济技术开发区屋顶分布式光伏整区开发项目',
           'amountForProjectDisplay': '8.00',
           'rate': '80.00%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '2.00',
           'rate': '20.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'XcZXmf0NeHI7T1ckRuuvRg==',
       'companyId': 'uyeftYwahm2hnOHAh8tbJg==',
       'companyName': '渭南市城市投资集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '陕西',
       'city': '渭南',
       'country': '临渭区',
       'industryCategory': '土木工程建筑业',
       'businessTermStartDate': '2003-07-25',
       'registeredCapital': '160491.43',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '2023年渭南市城市投资集团有限公司绿色债券',
       'bondShortName': '23渭南绿色债',
       'bondTypeName': '普通企业债',
       'bondPeriod': '7.00Y',
       'issuingScale': 7,
       'couponRateDisplay': '6.00',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-09',
       'maturityDate': '2030-03-09',
       'facilityRatingDate': '2022-12-13',
       'facilityRating': 'AA+',
       'facilityRatingAgency': '中证鹏元资信评估股份有限公司',
       'securitiesCode': '2380051',
       'issuingDate': '2023-03-08',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '渭南市中心城区供水管网平差及扩建工程',
           'amountForProjectDisplay': '3.00',
           'rate': '42.86%'
         },
         {
           'projectName': '渭南市污水厂提标改扩建工程',
           'amountForProjectDisplay': '2.00',
           'rate': '28.57%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '2.00',
           'rate': '28.57%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'p8nXLgCS6qBmQ4QRtgBJRQ==',
       'companyId': 'UEV0laWZoaBMwOt1aZTgxg==',
       'companyName': '江苏长荡湖旅游控股有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '江苏',
       'city': '常州',
       'country': '金坛区',
       'industryCategory': '土木工程建筑业',
       'businessTermStartDate': '2002-02-08',
       'registeredCapital': '200000.00',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '2023年第一期江苏长荡湖旅游控股有限公司绿色债券',
       'bondShortName': '23长荡湖绿债01',
       'bondTypeName': '普通企业债',
       'bondPeriod': '7.00Y',
       'issuingScale': 2,
       'couponRateDisplay': '4.99',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-03',
       'maturityDate': '2030-03-03',
       'facilityRatingDate': '2022-11-09',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中证鹏元资信评估股份有限公司',
       'securitiesCode': '2380040',
       'issuingDate': '2023-03-02',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '生态环境产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '江苏金坛长荡湖水生态综合治理改造项目',
           'amountForProjectDisplay': '1.00',
           'rate': '50.00%'
         },
         {
           'projectName': '其它',
           'amountForProjectDisplay': '1.00',
           'rate': '50.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'fEumt6kbnSEih26nqTPAkw==',
       'companyId': 'czcQXB9yhM4AnWN9RlSrIg==',
       'companyName': '知识城(广州)投资集团有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '广东',
       'city': '广州',
       'country': '黄埔区',
       'industryCategory': '其他土木工程建筑',
       'businessTermStartDate': '1984-07-19',
       'registeredCapital': '208490.57',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '知识城(广州)投资集团有限公司2023年度第一期绿色中期票据',
       'bondShortName': '23知识城GN001',
       'bondTypeName': '中期票据',
       'bondPeriod': '5.00Y',
       'issuingScale': 5,
       'couponRateDisplay': '3.80',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-03',
       'maturityDate': '2028-03-03',
       'facilityRatingDate': '2023-02-08',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '中证鹏元资信评估股份有限公司',
       'securitiesCode': '132380011',
       'issuingDate': '2023-03-01',
       'debtorRating': 'AAA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '知识城广场项目',
           'amountForProjectDisplay': '2.00',
           'rate': '40.00%'
         },
         {
           'projectName': '知识城产业聚集服务中心项目',
           'amountForProjectDisplay': '2.00',
           'rate': '40.00%'
         },
         {
           'projectName': '知识城大厦项目(绿色三星建筑)',
           'amountForProjectDisplay': '1.00',
           'rate': '20.00%'
         }
       ],
       'certificationResult': 'G1',
       'certificationDate': '2023-01-31',
       'certificationResultsDescription': '中证鹏元绿融的评估结果为G1',
       'expired': false
     },
     {
       'id': 'YhdpuRTmBKWspCQhy318zA==',
       'companyId': 'JTQHFFX2jd9R2wcDp4fjzA==',
       'companyName': '郑州公共住宅建设投资有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '河南',
       'city': '郑州',
       'country': null,
       'industryCategory': '房地产开发经营',
       'businessTermStartDate': '2007-10-29',
       'registeredCapital': '100000.00',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '郑州公共住宅建设投资有限公司2023年度第一期绿色定向债务融资工具(碳中和债)',
       'bondShortName': '23郑州公宅GN001(碳中和债)',
       'bondTypeName': '中期票据',
       'bondPeriod': '3.00Y',
       'issuingScale': 3,
       'couponRateDisplay': '4.00',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-03-02',
       'maturityDate': '2026-03-02',
       'facilityRatingDate': null,
       'facilityRating': null,
       'facilityRatingAgency': null,
       'securitiesCode': '132380012',
       'issuingDate': '2023-02-28',
       'debtorRating': 'AA-',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#35CACA'
         },
         {
           'id': null,
           'name': '碳中和债券',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#2FAF83'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '郑州市青年人才公寓（荥泽苑）一期、二期项目',
           'amountForProjectDisplay': '3.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': 'G1',
       'certificationDate': '2023-02-02',
       'certificationResultsDescription': '募集资金全部用于具有碳减排效益的绿色低碳产业项目，绿色等级为G1。',
       'expired': false
     },
     {
       'id': 'SGZzljwdhP27wGzqfIW1tw==',
       'companyId': 'DVq6l+Kho8firLBLlTD/gA==',
       'companyName': '无锡市太湖新城资产经营管理有限公司',
       'parentCompanyId': null,
       'tags': [],
       'hbTags': [],
       'province': '江苏',
       'city': '无锡',
       'country': null,
       'industryCategory': '住宿业',
       'businessTermStartDate': '2008-03-14',
       'registeredCapital': '1266309.18',
       'registeredCapitalUnit': '万人民币元',
       'highlight': {},
       'bondName': '无锡市太湖新城资产经营管理有限公司2023年面向专业投资者非公开发行绿色公司债券(第一期)(品种一)',
       'bondShortName': 'G新城01',
       'bondTypeName': '公司债',
       'bondPeriod': '5.00Y',
       'issuingScale': 10,
       'couponRateDisplay': '4.10',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-02-08',
       'maturityDate': '2028-02-08',
       'facilityRatingDate': '2023-01-10',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '联合资信评估股份有限公司',
       'securitiesCode': '114885',
       'issuingDate': '2023-02-07',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '非贴标绿',
           'description': null,
           'color': '#fff',
           'bgColor': '#4CCA72'
         }
       ],
       'greenProjectClassifications': [
         '基础设施绿色升级',
         '生态环境产业',
         '节能环保产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '无锡市太湖湾环境提升整治项目',
           'amountForProjectDisplay': '10.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     },
     {
       'id': 'aJJqExa+F0Vpev5h67xF0Q==',
       'companyId': 'uY+kV3S6QVy5YC7uLZe2ZQ==',
       'companyName': '中国水发兴业能源集团有限公司',
       'parentCompanyId': null,
       'tags': [
         '上市'
       ],
       'hbTags': [],
       'province': null,
       'city': null,
       'country': null,
       'industryCategory': '土木工程建筑业',
       'businessTermStartDate': null,
       'registeredCapital': '0.00',
       'registeredCapitalUnit': '万美元',
       'highlight': {},
       'bondName': '中国水发兴业能源集团有限公司2023年面向专业投资者非公开发行绿色公司债券(第一期)',
       'bondShortName': 'G23水兴1',
       'bondTypeName': '公司债',
       'bondPeriod': '3.00Y',
       'issuingScale': 1,
       'couponRateDisplay': '6.50',
       'calculateInterestMethod': '固息',
       'valueDate': '2023-01-19',
       'maturityDate': '2026-01-19',
       'facilityRatingDate': '2022-12-30',
       'facilityRating': 'AAA',
       'facilityRatingAgency': '大公国际资信评估有限公司',
       'securitiesCode': '114846',
       'issuingDate': '2023-01-19',
       'debtorRating': 'AA',
       'companyClassifications': [
         '国有企业'
       ],
       'labels': [
         {
           'id': null,
           'name': '非贴标绿',
           'description': null,
           'color': '#ffffff',
           'bgColor': '#4CCA72'
         }
       ],
       'greenProjectClassifications': [
         '清洁能源产业'
       ],
       'hasProjectData': null,
       'projectFundRateList': [
         {
           'projectName': '陕西省铜川市250MW光伏项目',
           'amountForProjectDisplay': '1.00',
           'rate': '100.00%'
         }
       ],
       'certificationResult': null,
       'certificationDate': null,
       'certificationResultsDescription': null,
       'expired': false
     }
   ]
 };
  
  res.json(resultSuccess(data));
});

