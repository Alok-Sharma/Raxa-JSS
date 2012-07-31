/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * This file is store of list of laborders
 */
Ext.define('Laboratory.store.LabOrderSearch', {
    extend: 'Ext.data.Store',
    model: 'Laboratory.model.LabOrderSearch',

    proxy: {
        type: 'rest',
        url: 'http://openmrs.gielow.me/openmrs-1.8.4/ws/rest/v1/order?type=laborder&v=full',
        headers: {
            "Accept": "application/json",
            "Authorization": "Basic " + window.btoa("admin:Admin123"),
            "Content-Type": "application/json"
        },
        reader: {
            type: 'json',
            root: 'results'
        }
    },
    autoLoad: true,

	data: [
		{
		labOrderId: '2012.01/0001',
		PatientDisplay: 'Pinky Singh',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0002',
		PatientDisplay: 'Alok Sharma',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0003',
		PatientDisplay: 'Tarang Mahajan',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0004',
		PatientDisplay: 'John Stoecker',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0005',
		PatientDisplay: 'Joy Ming',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0006',
		PatientDisplay: 'Sathyan',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0007',
		PatientDisplay: 'Shivam Shah',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0008',
		PatientDisplay: 'Tushar Bansal',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0009',
		PatientDisplay: 'Piyush Dane',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0010',
		PatientDisplay: 'Karan Singh',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0011',
		PatientDisplay: 'Bhawna Arya Bajaj',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0012',
		PatientDisplay: 'Rishi Tiwari',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0013',
		PatientDisplay: 'Piyush Madan',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0014',
		PatientDisplay: 'Suraj Mandal',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0015',
		PatientDisplay: 'Raghav Garg',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0016',
		PatientDisplay: 'Sahil Monga',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0017',
		PatientDisplay: 'Dheeraj Bajaj',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0018',
		PatientDisplay: 'Manoj Singh',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0019',
		PatientDisplay: 'Karan Sharma',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		{
		labOrderId: '2012.01/0020',
		PatientDisplay: 'Jitender Saini',
		PatientUUID: 'dd9a7551-1691-11df-97a5-7038c432aabf'
	    },
		]
})
