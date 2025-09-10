import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Briefcase, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  deadline: string;
  description: string;
}

const JobList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Data Analyst',
      department: 'Data Analytics',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3-5 years',
      deadline: 'Dec 31, 2024',
      description: 'We are looking for a Senior Data Analyst to join our growing team and help drive data-driven decisions across the organization.'
    },
    {
      id: '2',
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Sheridan, WY',
      type: 'Full-time',
      experience: '2-4 years',
      deadline: 'Jan 15, 2025',
      description: 'Join our marketing team to create and execute digital campaigns that drive customer acquisition and engagement.'
    },
    {
      id: '3',
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      experience: '1-3 years',
      deadline: 'Jan 30, 2025',
      description: 'Be part of our sales team and help connect with potential clients, building relationships and driving business growth.'
    },
    {
      id: '4',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-5 years',
      deadline: 'Feb 15, 2025',
      description: 'Build beautiful, responsive web applications using modern technologies like React, TypeScript, and Tailwind CSS.'
    },
    {
      id: '5',
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Sheridan, WY',
      type: 'Full-time',
      experience: '3-6 years',
      deadline: 'Mar 1, 2025',
      description: 'Drive customer satisfaction and retention by ensuring our clients achieve their business goals with our solutions.'
    }
  ];

  const departments = [...new Set(jobs.map(job => job.department))];
  const jobTypes = [...new Set(jobs.map(job => job.type))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
    const matchesType = !selectedType || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-card rounded-xl p-6 shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Find Your Perfect Role
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-10"
            />
          </div>

          {/* Department Filter */}
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="form-input"
          >
            <option value="">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-input"
          >
            <option value="">All Types</option>
            {jobTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDepartment('');
              setSelectedType('');
            }}
            className="btn-outline flex items-center justify-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Clear Filters</span>
          </button>
        </div>
      </div>

      {/* Job Results */}
      <div className="text-sm text-foreground/60 mb-4">
        Showing {filteredJobs.length} of {jobs.length} jobs
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="card-elevated group">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-poppins">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium">{job.department}</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Job Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Apply by {job.deadline}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={`/resources/careers/${job.id}`}
                    className="btn-outline text-center"
                  >
                    View Details
                  </Link>
                  <button className="btn-primary">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-foreground/40" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No jobs found
          </h3>
          <p className="text-foreground/70">
            Try adjusting your search criteria or check back later for new opportunities.
          </p>
        </div>
      )}
    </div>
  );
};

export default JobList;