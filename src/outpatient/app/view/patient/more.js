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
 */
 
Ext.define('RaxaEmr.Outpatient.view.patient.more', {
    extend: 'Ext.Container',
    xtype: 'patientlist-show',
    requires: ['RaxaEmr.Outpatient.view.patient.Grid', 'RaxaEmr.Outpatient.view.patient.medicationhistory', 'RaxaEmr.Outpatient.view.patient.refertodoc', 'RaxaEmr.Outpatient.view.patient.work', 'RaxaEmr.Outpatient.view.patient.labresulthistory'],
    config: {
        title: 'Information',
        cls: 'x-show-contact',
        ui: 'round',
        id: 'more',
        layout: 'vbox',
        items: [{
            id: 'content',
            tpl: ['<div class="top">', '<div style="float:left;width:50%;">', '<div class="headshot" style="float:left;background-image:url(resources/images/headshots/pic.gif);">', '</div>', '<div class="name" style="float:left;width:80%;">', '{firstName} {lastName}', '</br>', '<span>From : {city}, {state}</span>', '</br>', '</div>', '</div>', '<div style="float:left;width:50%;">', '<div class="name_small" style="float:left;width:50%;">', '<span> Age: {age} </span>', '<span>ID : {id}</span>', '</br>', '</div>', '<div class="name_right" style="float:left;width:50%;">', '<span> {nameofdoc} </span>', '<span></span>', '</div>', '</div>', '</div>'].join('')
        }, {
            xtype: 'container',
            layout: {
                type: 'card'
            },
            border: '1 0 0 0',
            style: 'border:solid #666666;',
            id: 'working-area',
            flex: 1,
            activeItem: 0,
            items: [{
                xtype: 'container',
                scrollable: 'vertical',
                items: [{
                    xtype: 'grid-grid',
                    height: 85,
                    border: 10,
                }, {
                    xtype: 'formpanel',
                    height: 100,
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    },
                    scrollable: 'false',
                    items: [{
                        xtype: 'fieldset',
                        height: 75,
                        margin: '-10 20 0 -3',
                        layout: {
                            type: 'hbox'
                        },
                        flex: 1,
                        items: [{
                            xtype: 'textareafield',
                            label: 'Cheif Complaint',
                            flex: 1
                        }]
                    }, {
                        xtype: 'fieldset',
                        height: 75,
                        margin: '-10 0 0 0',
                        layout: {
                            type: 'hbox'
                        },
                        flex: 1,
                        items: [{
                            xtype: 'textareafield',
                            label: 'Notes',
                            flex: 1
                        }]
                    }]
                }, {
                    xtype: 'work'
                }]
            }]
        }],
        record: null
    },

    updateRecord: function (newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});