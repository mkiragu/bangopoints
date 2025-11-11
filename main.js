// Bangopoints - Main JavaScript File
// Employee Management and Performance Tracking System

// Global state management
const AppState = {
    employees: [],
    performanceData: [],
    notifications: [],
    currentUser: null,
    isLoading: false
};

// User Management System
class UserManager {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.initializeUserSystem();
    }

    initializeUserSystem() {
        // Initialize default users if not exists
        if (!localStorage.getItem('bangopoints_users')) {
            this.createDefaultUsers();
        }
    }

    createDefaultUsers() {
        const defaultUsers = [
            {
                id: 'U001',
                name: 'Sarah Johnson',
                email: 'sarah.johnson@bangopoints.com',
                phone: '+254 712 345 678',
                role: 'admin',
                region: 'east-africa',
                department: 'Operations',
                status: 'active',
                createdAt: '2024-01-15',
                lastLogin: new Date().toISOString().split('T')[0],
                permissions: ['all'],
                password: 'admin123'
            },
            {
                id: 'U002',
                name: 'Michael Chen',
                email: 'michael.chen@bangopoints.com',
                phone: '+234 803 456 7890',
                role: 'brand-manager',
                region: 'west-africa',
                department: 'Brand Management',
                status: 'active',
                createdAt: '2024-02-01',
                lastLogin: new Date().toISOString().split('T')[0],
                permissions: ['brands', 'reports', 'invoicing'],
                password: 'brand123'
            },
            {
                id: 'U003',
                name: 'Fatima Al-Hassan',
                email: 'fatima.alhassan@bangopoints.com',
                phone: '+27 82 123 4567',
                role: 'finance',
                region: 'south-africa',
                department: 'Finance',
                status: 'active',
                createdAt: '2024-01-20',
                lastLogin: new Date().toISOString().split('T')[0],
                permissions: ['finance', 'reports', 'invoicing'],
                password: 'finance123'
            },
            {
                id: 'U004',
                name: 'Ahmed Mohamed',
                email: 'ahmed.mohamed@bangopoints.com',
                phone: '+20 100 234 5678',
                role: 'ppg',
                region: 'north-africa',
                department: 'Field Operations',
                status: 'active',
                createdAt: '2024-03-01',
                lastLogin: new Date().toISOString().split('T')[0],
                permissions: ['performance', 'receipts'],
                password: 'ppg123'
            },
            {
                id: 'U005',
                name: 'Grace Okafor',
                email: 'grace.okafor@bangopoints.com',
                phone: '+234 816 789 0123',
                role: 'beo',
                region: 'west-africa',
                department: 'Business Development',
                status: 'pending',
                createdAt: '2024-11-01',
                lastLogin: null,
                permissions: ['receipts', 'bd-leads'],
                password: 'beo123'
            },
            {
                id: 'U006',
                name: 'James Kiprotich',
                email: 'james.kiprotich@bangopoints.com',
                phone: '+254 722 890 1234',
                role: 'shopper',
                region: 'east-africa',
                department: 'Customer',
                status: 'active',
                createdAt: '2024-02-15',
                lastLogin: new Date().toISOString().split('T')[0],
                permissions: ['rewards', 'points'],
                password: 'shopper123'
            }
        ];

        localStorage.setItem('bangopoints_users', JSON.stringify(defaultUsers));
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('bangopoints_users')) || [];
    }

    saveUsers(users) {
        localStorage.setItem('bangopoints_users', JSON.stringify(users));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('bangopoints_current_user')) || null;
    }

    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('bangopoints_current_user', JSON.stringify(user));
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('bangopoints_current_user');
        window.location.href = 'login.html';
    }

    authenticate(email, password) {
        const users = this.getUsers();
        return users.find(user => user.email === email && user.password === password);
    }

    hasPermission(permission) {
        if (!this.currentUser) return false;
        if (this.currentUser.role === 'admin') return true;
        return this.currentUser.permissions.includes(permission);
    }

    updateLastLogin(userId) {
        const users = this.getUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            users[userIndex].lastLogin = new Date().toISOString().split('T')[0];
            this.saveUsers(users);
        }
    }
}

// Initialize user manager
const userManager = new UserManager();

// Mock data for demonstration
const mockEmployees = [
    {
        id: 'PPG001',
        name: 'Sarah Mwangi',
        location: 'Nairobi CBD',
        status: 'online',
        performance: 92,
        dailyTarget: 150,
        achieved: 138,
        wage: 2500,
        clockIn: '08:30',
        clockOut: null,
        consecutiveDays: 12,
        avatar: '👩‍💼'
    },
    {
        id: 'PPG002',
        name: 'James Kiprotich',
        location: 'Westlands',
        status: 'online',
        performance: 78,
        dailyTarget: 150,
        achieved: 117,
        wage: 1950,
        clockIn: '09:15',
        clockOut: null,
        consecutiveDays: 8,
        avatar: '👨‍💼'
    },
    {
        id: 'PPG003',
        name: 'Amina Hassan',
        location: 'Eastleigh',
        status: 'away',
        performance: 65,
        dailyTarget: 150,
        achieved: 98,
        wage: 1625,
        clockIn: '08:45',
        clockOut: null,
        consecutiveDays: 6,
        avatar: '👩‍💼'
    },
    {
        id: 'PPG004',
        name: 'David Otieno',
        location: 'Kisumu',
        status: 'offline',
        performance: 45,
        dailyTarget: 150,
        achieved: 68,
        wage: 1125,
        clockIn: null,
        clockOut: null,
        consecutiveDays: 3,
        avatar: '👨‍💼'
    },
    {
        id: 'PPG005',
        name: 'Grace Wanjiku',
        location: 'Mombasa',
        status: 'online',
        performance: 89,
        dailyTarget: 150,
        achieved: 134,
        wage: 2225,
        clockIn: '08:00',
        clockOut: null,
        consecutiveDays: 15,
        avatar: '👩‍💼'
    }
];

const mockNotifications = [
    {
        id: 1,
        type: 'warning',
        title: 'Performance Alert',
        message: 'David Otieno (PPG004) has below-target performance for 2 consecutive days',
        timestamp: '2 hours ago',
        priority: 'high'
    },
    {
        id: 2,
        type: 'info',
        title: 'Shift Transfer',
        message: 'Sarah Mwangi transferred to Kisumu outlet for next week',
        timestamp: '4 hours ago',
        priority: 'medium'
    },
    {
        id: 3,
        type: 'success',
        title: 'Target Achieved',
        message: 'Grace Wanjiku exceeded daily target by 134%',
        timestamp: '6 hours ago',
        priority: 'low'
    }
];

const mockActivity = [
    {
        type: 'clock-in',
        employee: 'Sarah Mwangi',
        action: 'clocked in at Nairobi CBD',
        time: '08:30',
        icon: '⏰'
    },
    {
        type: 'performance',
        employee: 'Grace Wanjiku',
        action: 'achieved 134% of daily target',
        time: '12:15',
        icon: '📈'
    },
    {
        type: 'alert',
        employee: 'David Otieno',
        action: 'performance flagged for review',
        time: '14:30',
        icon: '⚠️'
    },
    {
        type: 'transfer',
        employee: 'James Kiprotich',
        action: 'transferred to Mombasa outlet',
        time: '16:45',
        icon: '🔄'
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    AppState.employees = [...mockEmployees];
    AppState.notifications = [...mockNotifications];
    
    setupEventListeners();
    renderEmployeeList();
    renderActivityFeed();
    initializePerformanceChart();
    initializeParticleBackground();
    updateStats();
    
    // Animate page load
    anime({
        targets: '.performance-card, .hover-lift',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutQuart'
    });
}

function setupEventListeners() {
    // Notification modal
    const notificationBtn = document.getElementById('notification-btn');
    const notificationModal = document.getElementById('notification-modal');
    const closeNotifications = document.getElementById('close-notifications');
    
    notificationBtn.addEventListener('click', () => {
        showNotificationModal();
    });
    
    closeNotifications.addEventListener('click', () => {
        hideNotificationModal();
    });
    
    notificationModal.addEventListener('click', (e) => {
        if (e.target === notificationModal) {
            hideNotificationModal();
        }
    });
    
    // Employee search
    const employeeSearch = document.getElementById('employee-search');
    employeeSearch.addEventListener('input', (e) => {
        filterEmployees(e.target.value);
    });
    
    // Add employee button
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    addEmployeeBtn.addEventListener('click', () => {
        showAddEmployeeModal();
    });
}

function renderEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    
    AppState.employees.forEach(employee => {
        const employeeCard = createEmployeeCard(employee);
        employeeList.appendChild(employeeCard);
    });
}

function createEmployeeCard(employee) {
    const card = document.createElement('div');
    card.className = 'performance-card rounded-xl p-4 hover-lift cursor-pointer';
    card.onclick = () => showEmployeeDetails(employee);
    
    const statusClass = employee.status === 'online' ? 'status-online' : 
                       employee.status === 'away' ? 'status-away' : 'status-offline';
    
    const performanceColor = employee.performance >= 80 ? 'text-success' :
                            employee.performance >= 60 ? 'text-warning' : 'text-error';
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-steel-blue to-accent-silver rounded-full flex items-center justify-center text-lg">
                    ${employee.avatar}
                </div>
                <div>
                    <div class="font-semibold text-light-grey">${employee.name}</div>
                    <div class="text-xs text-accent-silver">${employee.id} • ${employee.location}</div>
                </div>
            </div>
            <div class="text-right">
                <div class="flex items-center">
                    <span class="status-indicator ${statusClass}"></span>
                    <span class="text-xs capitalize text-accent-silver">${employee.status}</span>
                </div>
                <div class="text-xs text-accent-silver mt-1">
                    ${employee.clockIn ? 'Clocked In' : 'Not Clocked In'}
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-3 gap-3 mb-3">
            <div class="text-center">
                <div class="text-lg font-bold font-mono ${performanceColor}">${employee.performance}%</div>
                <div class="text-xs text-accent-silver">Performance</div>
            </div>
            <div class="text-center">
                <div class="text-lg font-bold font-mono text-light-grey">${employee.achieved}/${employee.dailyTarget}</div>
                <div class="text-xs text-accent-silver">Target</div>
            </div>
            <div class="text-center">
                <div class="text-lg font-bold font-mono metric-highlight">KES ${employee.wage}</div>
                <div class="text-xs text-accent-silver">Daily Wage</div>
            </div>
        </div>
        
        <div class="flex justify-between items-center">
            <div class="text-xs text-accent-silver">
                ${employee.consecutiveDays} consecutive days
            </div>
            <div class="flex space-x-2">
                <button class="px-3 py-1 bg-steel-blue text-xs rounded-lg hover:silver-glow transition-all" 
                        onclick="event.stopPropagation(); clockInEmployee('${employee.id}')">
                    ${employee.clockIn ? 'Update' : 'Clock In'}
                </button>
                <button class="px-3 py-1 bg-medium-grey text-xs rounded-lg hover:bg-accent-silver hover:text-primary-bg transition-all"
                        onclick="event.stopPropagation(); viewPerformance('${employee.id}')">
                    Details
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function renderActivityFeed() {
    const activityFeed = document.getElementById('activity-feed');
    activityFeed.innerHTML = '';
    
    mockActivity.forEach(activity => {
        const activityItem = createActivityItem(activity);
        activityFeed.appendChild(activityItem);
    });
}

function createActivityItem(activity) {
    const item = document.createElement('div');
    item.className = 'flex items-center space-x-3 p-3 performance-card rounded-lg hover-lift';
    
    const iconBg = activity.type === 'success' ? 'bg-success' :
                   activity.type === 'warning' ? 'bg-warning' :
                   activity.type === 'error' ? 'bg-error' : 'bg-steel-blue';
    
    item.innerHTML = `
        <div class="w-8 h-8 ${iconBg} rounded-full flex items-center justify-center text-sm">
            ${activity.icon}
        </div>
        <div class="flex-1">
            <div class="text-sm font-medium text-light-grey">${activity.employee}</div>
            <div class="text-xs text-accent-silver">${activity.action}</div>
        </div>
        <div class="text-xs text-accent-silver">${activity.time}</div>
    `;
    
    return item;
}

function initializePerformanceChart() {
    const chartDom = document.getElementById('performance-chart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#2d2d2d',
            borderColor: '#c0c0c0',
            textStyle: {
                color: '#e5e5e5'
            }
        },
        legend: {
            data: ['Daily Performance', 'Target'],
            textStyle: {
                color: '#c0c0c0'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                lineStyle: {
                    color: '#404040'
                }
            },
            axisLabel: {
                color: '#c0c0c0'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#404040'
                }
            },
            axisLabel: {
                color: '#c0c0c0'
            },
            splitLine: {
                lineStyle: {
                    color: '#404040'
                }
            }
        },
        series: [
            {
                name: 'Daily Performance',
                type: 'line',
                stack: 'Total',
                data: [85, 92, 78, 94, 87, 91, 89],
                lineStyle: {
                    color: '#4a90a4'
                },
                itemStyle: {
                    color: '#4a90a4'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(74, 144, 164, 0.3)'
                        }, {
                            offset: 1, color: 'rgba(74, 144, 164, 0.1)'
                        }]
                    }
                }
            },
            {
                name: 'Target',
                type: 'line',
                data: [80, 80, 80, 80, 80, 80, 80],
                lineStyle: {
                    color: '#c0c0c0',
                    type: 'dashed'
                },
                itemStyle: {
                    color: '#c0c0c0'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', () => {
        myChart.resize();
    });
}

function initializeParticleBackground() {
    // p5.js particle system
    new p5((p) => {
        let particles = [];
        
        p.setup = function() {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-bg');
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(1, 3)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(192, 192, 192, 100);
                p.noStroke();
                p.circle(particle.x, particle.y, particle.size);
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(other => {
                    const distance = p.dist(particle.x, particle.y, other.x, other.y);
                    if (distance < 100) {
                        p.stroke(192, 192, 192, 50 * (1 - distance / 100));
                        p.strokeWeight(0.5);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                });
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

function updateStats() {
    const activePPGs = AppState.employees.filter(emp => emp.status === 'online').length;
    const avgPerformance = Math.round(
        AppState.employees.reduce((sum, emp) => sum + emp.performance, 0) / AppState.employees.length
    );
    
    document.getElementById('active-ppgs').textContent = activePPGs;
    document.getElementById('avg-performance').textContent = avgPerformance + '%';
    
    // Animate stats update
    anime({
        targets: '.metric-highlight',
        scale: [1.1, 1],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

function filterEmployees(searchTerm) {
    const filtered = AppState.employees.filter(employee => 
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    
    filtered.forEach(employee => {
        const employeeCard = createEmployeeCard(employee);
        employeeList.appendChild(employeeCard);
    });
    
    // Animate filtered results
    anime({
        targets: '#employee-list .performance-card',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(50),
        duration: 400,
        easing: 'easeOutQuart'
    });
}

function showEmployeeDetails(employee) {
    // Create modal for employee details
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4';
    modal.innerHTML = `
        <div class="glass-effect rounded-xl p-6 w-full max-w-md">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-light-grey">Employee Details</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-accent-silver hover:text-light-grey">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <div class="text-center mb-4">
                <div class="w-16 h-16 bg-gradient-to-br from-steel-blue to-accent-silver rounded-full flex items-center justify-center text-2xl mx-auto mb-2">
                    ${employee.avatar}
                </div>
                <h4 class="text-xl font-semibold text-light-grey">${employee.name}</h4>
                <p class="text-sm text-accent-silver">${employee.id}</p>
            </div>
            
            <div class="space-y-3">
                <div class="flex justify-between">
                    <span class="text-accent-silver">Location:</span>
                    <span class="text-light-grey">${employee.location}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-accent-silver">Status:</span>
                    <span class="text-light-grey capitalize">${employee.status}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-accent-silver">Performance:</span>
                    <span class="text-light-grey">${employee.performance}%</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-accent-silver">Daily Target:</span>
                    <span class="text-light-grey">${employee.achieved}/${employee.dailyTarget}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-accent-silver">Daily Wage:</span>
                    <span class="text-light-grey">KES ${employee.wage}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-accent-silver">Consecutive Days:</span>
                    <span class="text-light-grey">${employee.consecutiveDays} days</span>
                </div>
            </div>
            
            <div class="flex space-x-3 mt-6">
                <button onclick="clockInEmployee('${employee.id}')" class="flex-1 px-4 py-2 bg-steel-blue rounded-lg text-sm font-medium hover:silver-glow transition-all">
                    ${employee.clockIn ? 'Update Status' : 'Clock In'}
                </button>
                <button onclick="viewPerformance('${employee.id}')" class="flex-1 px-4 py-2 bg-medium-grey rounded-lg text-sm font-medium hover:bg-accent-silver hover:text-primary-bg transition-all">
                    View Performance
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.glass-effect'),
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function clockInEmployee(employeeId) {
    const employee = AppState.employees.find(emp => emp.id === employeeId);
    if (employee) {
        employee.clockIn = new Date().toLocaleTimeString('en-GB', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        employee.status = 'online';
        
        // Update UI
        renderEmployeeList();
        updateStats();
        
        // Show success message
        showToast('Employee clocked in successfully!', 'success');
    }
}

function viewPerformance(employeeId) {
    // Navigate to performance page with employee ID
    window.location.href = `performance.html?employee=${employeeId}`;
}

function showNotificationModal() {
    const modal = document.getElementById('notification-modal');
    const notificationList = document.getElementById('notification-list');
    
    notificationList.innerHTML = '';
    
    AppState.notifications.forEach(notification => {
        const notificationItem = createNotificationItem(notification);
        notificationList.appendChild(notificationItem);
    });
    
    modal.classList.remove('hidden');
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.glass-effect'),
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

function hideNotificationModal() {
    const modal = document.getElementById('notification-modal');
    modal.classList.add('hidden');
}

function createNotificationItem(notification) {
    const item = document.createElement('div');
    item.className = 'flex items-start space-x-3 p-3 bg-secondary-bg rounded-lg';
    
    const iconColor = notification.type === 'warning' ? 'text-warning' :
                     notification.type === 'error' ? 'text-error' :
                     notification.type === 'success' ? 'text-success' : 'text-info';
    
    item.innerHTML = `
        <div class="w-8 h-8 bg-medium-grey rounded-full flex items-center justify-center ${iconColor}">
            ${notification.type === 'warning' ? '⚠️' : 
              notification.type === 'error' ? '❌' : 
              notification.type === 'success' ? '✅' : 'ℹ️'}
        </div>
        <div class="flex-1">
            <div class="font-semibold text-light-grey text-sm">${notification.title}</div>
            <div class="text-accent-silver text-xs mt-1">${notification.message}</div>
            <div class="text-xs text-accent-silver mt-2">${notification.timestamp}</div>
        </div>
        <button onclick="this.closest('.flex').remove()" class="text-accent-silver hover:text-light-grey">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    `;
    
    return item;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 px-4 py-3 rounded-lg text-white text-sm font-medium z-50 ${
        type === 'success' ? 'bg-success' :
        type === 'warning' ? 'bg-warning' :
        type === 'error' ? 'bg-error' : 'bg-info'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate toast appearance
    anime({
        targets: toast,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        anime({
            targets: toast,
            opacity: [1, 0],
            translateX: [0, 100],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => toast.remove()
        });
    }, 3000);
}

function showAddEmployeeModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4';
    modal.innerHTML = `
        <div class="glass-effect rounded-xl p-6 w-full max-w-md">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-light-grey">Add New PPG</h3>
                <button onclick="this.closest('.fixed').remove()" class="text-accent-silver hover:text-light-grey">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <form id="add-employee-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-accent-silver mb-2">Full Name</label>
                    <input type="text" id="employee-name" required 
                           class="w-full px-3 py-2 bg-secondary-bg border border-medium-grey rounded-lg text-light-grey placeholder-accent-silver focus:border-steel-blue focus:outline-none">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-accent-silver mb-2">Location</label>
                    <input type="text" id="employee-location" required 
                           class="w-full px-3 py-2 bg-secondary-bg border border-medium-grey rounded-lg text-light-grey placeholder-accent-silver focus:border-steel-blue focus:outline-none">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-accent-silver mb-2">Daily Target</label>
                    <input type="number" id="employee-target" value="150" required 
                           class="w-full px-3 py-2 bg-secondary-bg border border-medium-grey rounded-lg text-light-grey placeholder-accent-silver focus:border-steel-blue focus:outline-none">
                </div>
                
                <div class="flex space-x-3 pt-4">
                    <button type="button" onclick="this.closest('.fixed').remove()" 
                            class="flex-1 px-4 py-2 bg-medium-grey rounded-lg text-sm font-medium hover:bg-accent-silver hover:text-primary-bg transition-all">
                        Cancel
                    </button>
                    <button type="submit" 
                            class="flex-1 px-4 py-2 bg-steel-blue rounded-lg text-sm font-medium hover:silver-glow transition-all">
                        Add PPG
                    </button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Handle form submission
    modal.querySelector('#add-employee-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newId = `PPG${String(AppState.employees.length + 1).padStart(3, '0')}`;
        const newEmployee = {
            id: newId,
            name: modal.querySelector('#employee-name').value,
            location: modal.querySelector('#employee-location').value,
            status: 'offline',
            performance: 0,
            dailyTarget: parseInt(modal.querySelector('#employee-target').value),
            achieved: 0,
            wage: 0,
            clockIn: null,
            clockOut: null,
            consecutiveDays: 0,
            avatar: '👤'
        };
        
        AppState.employees.push(newEmployee);
        renderEmployeeList();
        updateStats();
        
        modal.remove();
        showToast('PPG added successfully!', 'success');
    });
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.glass-effect'),
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}