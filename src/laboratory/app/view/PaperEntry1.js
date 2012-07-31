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
 *  This view is first page of Paper Entry which lists all the pending Lab Orders 
 */
Ext.define('Laboratory.view.PaperEntry1', {
    extend: 'Ext.container.Container',
    alias: 'widget.PaperEntry1',
    autoScroll: true,
    activeItem: 0,

    layout: {
        type: 'absolute',
    },

    items: [{
        xtype: 'laborderlistgrid',
        id: 'labOrderListPaperEntry',
        title: 'List of Lab Orders',
        width: 200,
        height: 400,
        store: Ext.create('Laboratory.store.LabOrderSearch'),
        listeners: {
            click: {
                element: 'el', //bind to the underlying el property on the panel
                fn: function () {
                    var l = Ext.getCmp('mainLabArea').getLayout();
                    l.setActiveItem(LAB_PAGES.PAPER_ENTRY_ENTER_DATA.value);
                    var grid = Ext.getCmp('labOrderListPaperEntry');
                    var pos = grid.getSelectionModel().selected.length;
                    selectedLabOrderId = '2012.01/0001';
                    selectedPatientDisplay = 'Pinky Singh';
//                    selectedPatientUuid = grid.store.data.items[pos - 1].raw.patient.uuid;
//                    selectedLabOrderIdUuid = grid.store.data.items[pos - 1].raw.uuid;

                    //Sets the LabOrderId and Patient's Name in the view
                    Ext.getCmp('LabOrderNoPaperEntry4Panel').setValue(selectedLabOrderId);
                    Ext.getCmp('patientDisplayPaperEntry4Panel').setValue(selectedPatientDisplay);
					Ext.getCmp('providerDisplayPaperEntry4Panel').setValue('Dr. Alok Mehta');
					Ext.getCmp('patientDOBPaperEntry4Panel').setValue('30-July-2008');
					Ext.getCmp('providerLocationPaperEntry4Panel').setValue('JSS Ganiyari');
					Ext.getCmp('patientIdPaperEntry4Panel').setValue('1353464746');

  /*                  var resultGrid = Ext.getCmp('results');

                    //This Ajax call gets the uuid of LabSpecimen concept which is used to set the proxy of concept store
                    Ext.Ajax.request({
                        url: LAB_HOST + '/ws/rest/v1/order/' + selectedLabOrderIdUuid + '?v=full',
                        method: 'GET',
                        disableCaching: false,
                        headers: {
                            "Accept": "application/json",
                            "Authorization": "Basic " + window.btoa(LAB_USERNAME + ":" + LAB_PASSWORD),
                            "Content-Type": "application/json"
                        },
                        failure: function (response) {
                            console.log('GET on laborder failed with response status: ' + response.status);
                        },
                        success: function (response) {
                            var JSONResult = JSON.parse(response.responseText);
                            conceptUuid = JSONResult.concept.uuid;
                            // This is to change the proxy by getting corresponding concept uuid from order
                            resultGrid.store.getProxy().url = LAB_HOME + '/ws/rest/v1/concept/' + conceptUuid + '?v=full';
                            resultGrid.store.load();
                        }
                    });
*/

                }
            }
        }
    }]

});
